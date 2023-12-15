export const submitToGoogleSheet = async (formData) => {
  try {
    const response = await fetch(
      `https://script.google.com/macros/s/AKfycbzsljtmT9cvUG8RIzLd7go67Jg-iohj5QjExUNbp91tQkd4KVCWCZUJjIogEJFZ_lCV/exec`,
      {
        method: 'POST',
        mode: 'no-cors', // Tambahkan mode 'no-cors' di sini
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    );

    // if (response.ok) {
    //   console.log('Data berhasil dikirim ke Google Sheets');
    // } else {
    //   console.error('Gagal mengirim data ke Google Sheets');
    // }
  } catch (error) {
    console.error('Error:', error);
  }
};
