import { PlanSystemDB, Tool, UserPlan } from "./types";

export function isUserPlanActive(userPlan: UserPlan): boolean {
  if (userPlan.status !== "active") {
    return false;
  }
  if (!userPlan.expiresAt) {
    return true;
  }
  return new Date(userPlan.expiresAt).getTime() > Date.now();
}

export function getAccessibleTools(db: PlanSystemDB, userId: string): Tool[] {
  const activePlanIds = db.userPlans.filter((up) => up.userId === userId && isUserPlanActive(up)).map((up) => up.planId);
  const planToolIds = new Set(
    db.plans
      .filter((plan) => activePlanIds.includes(plan.id) && plan.enabled)
      .flatMap((plan) => plan.toolIds),
  );

  return db.tools.filter((tool) => tool.enabled && planToolIds.has(tool.id));
}
