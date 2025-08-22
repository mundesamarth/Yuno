# Yuno Project Context

## Project Overview
**Project Name:** Yuno - Personal Finance AI Assistant  
**Start Date:** Day 3 of 8-day development plan (extended to 11 days)  
**Description:** AI-powered personal finance assistant for tracking expenses, managing budgets, and achieving financial goals  

## Tech Stack
### Frontend & Backend
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **UI Components:** Shadcn/UI
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation
- **Notifications:** Sonner (toast)

### Authentication
- **Auth Library:** NextAuth v5 (beta.29)
- **Strategies:** Credentials (email/password) + Google OAuth
- **Session:** JWT strategy
- **Password Hashing:** bcryptjs

### Database
- **Database:** Supabase (PostgreSQL)
- **ORM:** Prisma
- **Connection:** Pooled connection on port 6543, Direct on 5432

### Future Integrations
- **AI:** OpenAI API (not implemented yet)
- **Charts:** Recharts (not implemented yet)
- **Animations:** Framer Motion (not implemented yet)

## Project Structure
```
yuno/
├── app/
│   ├── (auth)/
│   │   ├── signin/
│   │   │   └── page.tsx       [UI DONE - needs form logic]
│   │   └── signup/
│   │       └── page.tsx       [COMPLETED]
│   ├── api/
│   │   ├── auth/
│   │   │   ├── [...nextauth]/
│   │   │   │   └── route.ts   [COMPLETED]
│   │   │   └── signup/
│   │   │       └── route.ts   [COMPLETED]
│   ├── ui/
│   │   └── components/
│   │       └── formElements/
│   │           └── form-input.tsx [COMPLETED]
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
│       └── [shadcn components]
├── lib/
│   ├── auth.ts               [COMPLETED]
│   └── db.ts                  [COMPLETED]
├── prisma/
│   └── schema.prisma          [COMPLETED]
├── types/
│   └── next-auth.d.ts        [COMPLETED]
└── .env.local
```

## Database Schema
```prisma
- User (id, email, password, name, image)
- Account (for OAuth)
- Session (for OAuth)
- Transaction (id, userId, categoryId, amount, description, date, type)
- Category (id, name, type, color, icon)
- Goal (id, userId, name, targetAmount, currentAmount, targetDate, status)
```

## Completed Features ✅

### 1. Project Setup
- Next.js 15 with App Router
- TypeScript configuration
- Supabase database connection
- Prisma ORM setup and migrations

### 2. Authentication System
- **Sign-up Page:**
  - Full form with validation (name, email, password, confirm password)
  - React Hook Form + Zod schema validation
  - Password strength requirements (8-32 chars)
  - Loading states with spinner
  - Toast notifications for success/error
  - Form reset after successful submission

- **Sign-up API Route:**
  - Request body validation
  - Check for existing users
  - Password hashing with bcrypt (10 salt rounds)
  - User creation in database
  - Proper error responses (400, 409, 500)

- **NextAuth Configuration:**
  - Credentials provider setup
  - Google OAuth provider configured (not tested)
  - JWT session strategy
  - Custom session callbacks for user ID
  - Prisma adapter integrated

### 3. Reusable Components
- **FormInput Component:**
  - forwardRef implementation for React Hook Form
  - Icon support with Lucide
  - Error message display
  - TypeScript properly configured

## Current Working Code

### /lib/auth.ts
```typescript
- NextAuth v5 configuration
- Credentials provider with email/password
- Google OAuth provider
- JWT callbacks for user session
- Prisma adapter setup
```

### /app/api/auth/signup/route.ts
```typescript
- POST endpoint for user registration
- Input validation
- Email uniqueness check
- Password hashing
- User creation with Prisma
- Proper error handling
```

## Environment Variables
```env
DATABASE_URL="postgresql://..."      # Supabase pooled connection
DIRECT_URL="postgresql://..."        # Supabase direct connection
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="[generated]"
AUTH_GOOGLE_ID="[configured]"
AUTH_GOOGLE_SECRET="[configured]"
```

## Key Decisions & Learnings

### Technical Decisions
1. **Switched from PlanetScale to Supabase** - PlanetScale removed free tier
2. **Using JWT instead of database sessions** - Required for credentials provider
3. **NextAuth v5 beta** - For Next.js 15 compatibility
4. **Removed PrismaAdapter for credentials-only** - Not needed with JWT

### Code Patterns
- Form validation: Client (Zod) + Server validation
- API routes: Try-catch with specific status codes
- Password: Always hash, never store plain text
- Types: Let Zod infer types instead of manual declaration

### Lessons Learned
- NextAuth v5 has different syntax (`handlers`, `auth` exports)
- Credentials + JWT doesn't need Account/Session models
- Google OAuth handles both signup and signin automatically
- forwardRef needed for React Hook Form with custom inputs

## Problems Solved
1. **TypeScript errors with Zod:** Let Zod infer types with `z.infer<typeof schema>`
2. **Form not validating:** Removed type annotation from schema
3. **Variables scope in API:** Moved validation inside try block
4. **Database not updating:** Fixed connection string and ran migrations

## Resources & Documentation
- [Next.js Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
- [NextAuth.js v5](https://authjs.dev/)
- [Prisma CRUD](https://www.prisma.io/docs/concepts/components/prisma-client/crud)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Validation](https://zod.dev/)

## Notes for Future Sessions
- Sign-up flow is complete and working
- Need to complete sign-in page form logic
- Dashboard is next major milestone
- Consider adding rate limiting to auth endpoints
- Email verification can be added later

---

*Last Updated: End of Day 3*  
*Next Session: Complete sign-in, start dashboard*