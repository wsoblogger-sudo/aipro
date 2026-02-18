# Aiprofitgen Web & Software Plan System (Additive Module)

## System Architecture
- **Frontend (Next.js App Router)**
  - Public entry: `/web-tools`
  - User auth pages: `/register`, `/login`
  - User secure dashboard: `/dashboard`
  - Admin secure routes: `/admin/login`, `/admin/panel`
- **Backend APIs (Next Route Handlers)**
  - User auth: `/api/auth/*`
  - Purchase flow: `/api/purchase`
  - License activation: `/api/license/activate`
  - User tool access: `/api/tools`
  - Admin control: `/api/admin/*`
- **Persistence layer**
  - JSON datastore at `data/plan-system.json` for users, plans, tools, keys, and permissions.

## Folder Structure
- `app/web-tools/page.tsx` — web tool landing and registration trigger.
- `app/register/page.tsx` — user registration form.
- `app/login/page.tsx` — user login form.
- `app/dashboard/page.tsx` — authenticated user dashboard entry.
- `app/admin/login/page.tsx` — admin login.
- `app/admin/panel/page.tsx` — admin control panel route.
- `app/api/auth/*` — user authentication/session endpoints.
- `app/api/purchase/route.ts` — plan purchase endpoint.
- `app/api/license/activate/route.ts` — one-time plan-tied activation logic.
- `app/api/admin/*` — user, plan, tool, license, dashboard management.
- `components/dashboard-client.tsx` — dashboard UI and actions.
- `components/admin-panel-client.tsx` — admin UI and actions.
- `lib/plan-system/*` — typed domain, auth, security, permission, and DB utilities.

## Database Structure
Stored in `data/plan-system.json`:
- `users[]`
  - `id`, `email`, `passwordHash`, `active`, timestamps.
- `plans[]`
  - `id`, `name`, `category` (`web`/`software`), `priceUsd`, `durationDays`, `enabled`, `toolIds[]`.
- `tools[]`
  - Includes exactly six `cashflow` tools plus additional web/software tools.
- `userPlans[]`
  - Purchase records and lifecycle states (`purchased`, `active`, `revoked`, `expired`).
- `licenseKeys[]`
  - `key`, `planId`, `assignedUserId`, `activatedByUserId`, `disabled`, optional expiry.
- `activationHistory[]`
  - Auditable activation/revocation events.
- `dashboardConfig`
  - Announcement and feature flags.

## Dashboard UI Layout
- Header with logout.
- Announcements panel.
- **Web Plans section** (separate category).
- **Software Plans section** (separate category + purchase).
- Software key activation form (plan selector + key field).
- **Cashflow section** with exactly 6 tools (filtered by permission and admin toggles).

## Admin Panel UI Layout
- User Management
  - View users, activate/deactivate.
- Plan Management
  - View plans, enable/disable, generate software keys.
- Tool Management
  - Enable/disable each tool including all 6 cashflow tools individually.
- License Key Management
  - View generated keys, activation owner, disable/revoke usage.
- Dashboard Control
  - Feature-level toggles and announcement controls.

## Authentication Flow
1. User opens `/web-tools` and selects a tool.
2. Redirect to `/register` for email + password signup.
3. Session cookie issued on success and user redirected to `/dashboard`.
4. Login/logout handled via `/api/auth/login` and `/api/auth/logout`.
5. Admin login uses fixed credentials and isolated admin session role.

## License Activation Logic
1. User purchases a **software** plan (`status: purchased`).
2. Admin generates a key for a specific software `planId`.
3. User submits key + plan in dashboard.
4. Backend validates:
   - Key exists and is not disabled.
   - Key matches the selected plan.
   - Key is not expired.
   - Key is not already activated by another user.
   - Key assignment (if present) matches user.
5. On success:
   - Key binds to user (`activatedByUserId`).
   - User plan becomes `active`.
   - Activation is written to history.

## Access Control Logic
- Session cookie is signed (HMAC) and HTTP-only.
- `/dashboard` requires authenticated user role.
- `/admin/panel` requires admin role.
- Enabled tools are computed from:
  - active user plans,
  - plan-to-tool mapping,
  - admin tool enabled flags.
- Software tools are blocked unless software plan is both purchased and license-activated.
- Admin can revoke tool/key access and changes apply instantly after data refresh.

## Permission Mapping System
- Plan permissions are explicit through `plan.toolIds`.
- Effective permissions = intersection of:
  - active plan tool IDs,
  - tool enabled status.
- Cashflow permissions are independent per tool (6 separate toggles).
- Dashboard feature visibility is controlled by `dashboardConfig.enabledFeatures`.
