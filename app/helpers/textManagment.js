export function buildFullName(fullName) {
  const lastName = fullName.split(' ')[1];
  const lastNameInitials = `${lastName[0]}.`;
  return fullName.replace(lastName, lastNameInitials);
}
