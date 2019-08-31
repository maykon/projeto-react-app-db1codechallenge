export const validateTaskDescription = (value, allValues) =>
  !value || value.length <= 50
    ? undefined
    : "O termo de busca deve ter até 50 caracteres.";

export const validatePostDescription = (value, allValues) =>
  value && value.length <= 50
    ? undefined
    : "A descrição deve ter até 50 caracteres.";
