import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { User, IUser } from '../models/User.js';

export const authRouter = Router();

// 1. Register a new user
authRouter.post('/register', async (req: Request, res: Response) => {
  try {
    const { name, email, password, targetLevel, avatar } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ success: false, error: 'Name, email, and password are required' });
    }

    const trimmedEmail = email.trim().toLowerCase();
    const existingUser = await User.findOne({ email: trimmedEmail });
    if (existingUser) {
      return res.status(409).json({ success: false, error: 'An account with this email already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const level = targetLevel || 'N5';
    const newUser = new User({
      name: name.trim(),
      email: trimmedEmail,
      password: hashedPassword,
      avatar: avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
      targetLevel: level,
      title: `JLPT ${level} Student`,
      xp: 0,
      streak: 1,
      completedLessons: [],
      studyTimeMinutes: 0,
      goalsInMonth: 0,
    });

    await newUser.save();

    return res.status(201).json({
      success: true,
      message: 'Account created successfully',
      user: newUser.toJSON(),
    });
  } catch (err: any) {
    console.error('Error during registration:', err);
    return res.status(500).json({ success: false, error: 'Server error creating account' });
  }
});

// 2. Log in
authRouter.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, error: 'Email and password are required' });
    }

    const trimmedEmail = email.trim().toLowerCase();
    const user = await User.findOne({ email: trimmedEmail });
    if (!user) {
      return res.status(401).json({ success: false, error: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ success: false, error: 'Invalid email or password' });
    }

    // Update streak logic (if logged in on a new day)
    const now = new Date();
    const lastActive = user.lastActiveDate ? new Date(user.lastActiveDate) : null;
    if (lastActive) {
      const diffHours = (now.getTime() - lastActive.getTime()) / (1000 * 60 * 60);
      if (diffHours >= 20 && diffHours < 48) {
        user.streak += 1;
      }
    }
    user.lastActiveDate = now;
    await user.save();

    return res.json({
      success: true,
      message: 'Logged in successfully',
      user: user.toJSON(),
    });
  } catch (err: any) {
    console.error('Error during login:', err);
    return res.status(500).json({ success: false, error: 'Server error during login' });
  }
});

// 3. Get user details by ID
authRouter.get('/user/:id', async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }
    return res.json({ success: true, user: user.toJSON() });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: 'Error fetching user' });
  }
});

// 4. Update individual user learning progress (gain XP, complete lesson, study time)
authRouter.post('/progress', async (req: Request, res: Response) => {
  try {
    const { userId, xpGained, lessonId, studyMinutesGained } = req.body;
    if (!userId) {
      return res.status(400).json({ success: false, error: 'userId is required' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    if (typeof xpGained === 'number' && xpGained > 0) {
      user.xp += xpGained;
    }

    if (lessonId && typeof lessonId === 'string') {
      if (!user.completedLessons.includes(lessonId)) {
        user.completedLessons.push(lessonId);
        user.goalsInMonth = user.completedLessons.length;
      }
    }

    if (typeof studyMinutesGained === 'number' && studyMinutesGained > 0) {
      user.studyTimeMinutes += studyMinutesGained;
    }

    user.lastActiveDate = new Date();
    await user.save();

    return res.json({
      success: true,
      user: user.toJSON(),
    });
  } catch (err: any) {
    console.error('Error updating progress:', err);
    return res.status(500).json({ success: false, error: 'Error updating learning progress' });
  }
});

// 5. Update Profile details (name, target level, avatar)
authRouter.put('/profile', async (req: Request, res: Response) => {
  try {
    const { userId, name, targetLevel, avatar, title } = req.body;
    if (!userId) {
      return res.status(400).json({ success: false, error: 'userId is required' });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ success: false, error: 'User not found' });
    }

    if (name) user.name = name.trim();
    if (targetLevel) {
      user.targetLevel = targetLevel;
      user.title = title || `JLPT ${targetLevel} Explorer`;
    }
    if (avatar) user.avatar = avatar;

    await user.save();

    return res.json({
      success: true,
      message: 'Profile updated',
      user: user.toJSON(),
    });
  } catch (err: any) {
    return res.status(500).json({ success: false, error: 'Error updating profile' });
  }
});
