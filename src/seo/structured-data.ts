const person = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Noah Di Silvio',
  url: 'https://noahdisilvio.com/',
  image: 'https://noahdisilvio.com/me.jpg',
  jobTitle: 'Full-stack web developer',
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Odisee' },
  address: { '@type': 'PostalAddress', addressLocality: 'Gent', addressCountry: 'BE' },
  sameAs: [
    'https://github.com/NoahDiSilvio',
    'https://www.linkedin.com/in/noah-di-silvio-6743633aa/',
  ],
}

const script = document.createElement('script')
script.type = 'application/ld+json'
script.textContent = JSON.stringify(person)
document.head.appendChild(script)
