async function submitForm(endpoint, payload) {
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      const error = new Error(data.message || 'A apărut o eroare. Încearcă din nou.');
      error.fieldErrors = data.fieldErrors || {};
      throw error;
    }

    return data;
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error('Nu am putut trimite formularul din cauza unei probleme de conexiune. Încearcă din nou.');
    }

    throw error;
  }
}

export { submitForm };
