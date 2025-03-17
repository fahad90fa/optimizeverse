
/**
 * Simple utility functions to handle authentication state
 * In a real application, this would be more sophisticated and potentially use a proper auth service
 */

/**
 * Check if a user is currently logged in
 * @returns boolean indicating if a user is logged in
 */
export const isLoggedIn = (): boolean => {
  return localStorage.getItem('currentUser') !== null;
};

/**
 * Get the current user data
 * @returns User object or null if not logged in
 */
export const getCurrentUser = () => {
  const userData = localStorage.getItem('currentUser');
  if (!userData) return null;
  
  try {
    return JSON.parse(userData);
  } catch (error) {
    console.error('Error parsing user data:', error);
    return null;
  }
};

/**
 * Log out the current user
 */
export const logout = (): void => {
  localStorage.removeItem('currentUser');
};
