interface Contact {
  phone: string;
}

function formatPhoneNumber(phone: string): string {
  const [number, extension] = phone.split(' x');
  const formattedNumber = number.split('-').join('');
  return `${formattedNumber} ext. ${extension}`;
}

const contact: Contact = {
  phone: formatPhoneNumber("010-692-6593 x09125"),
};

console.log(contact.phone); // Output will be "0106926593 ext. 09125"
