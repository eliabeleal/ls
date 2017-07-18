let ips = [
  {ip: '192.168.0.1', mask: '255.255.255.0', origin: 'admin'},
  {ip: '192.168.0.10', mask: '255.255.255.0', origin: 'student'},
  {ip: '192.168.0.14', mask: '255.255.255.0', origin: 'student'},
  {ip: '192.168.0.15', mask: '255.255.255.0', origin: 'student'},
  {ip: '192.168.0.100', mask: '255.255.255.0', origin: 'prof'},
  {ip: '192.168.0.101', mask: '255.255.255.0', origin: 'prof'},
  {ip: '192.168.0.102', mask: '255.255.255.0', origin: 'prof'}
]

// map & filter
const tbody = document.querySelector('#ips tbody')
const isStudent = address => address.origin === 'student'
const formatRow = values => `<tr><td>${values.join('</td><td>')}</td></tr>`
const createRow = address => formatRow(Object.values(address).slice(0, 2))
tbody.innerHTML = ips.filter(isStudent).map(createRow).join('')
