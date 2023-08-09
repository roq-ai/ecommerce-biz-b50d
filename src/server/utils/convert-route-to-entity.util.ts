const mapping: Record<string, string> = {
  merchants: 'merchant',
  questions: 'question',
  solutions: 'solution',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
