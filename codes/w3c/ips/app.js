let ips = [
  {ip: '192.168.0.1', mask: '255.255.255.0'},
  {ip: '192.168.0.10', mask: '255.255.255.0'},
  {ip: '192.168.0.100', mask: '255.255.255.0'}
]

const tbody = document.querySelector('table tbody')
const formatRow = datas => `<tr><td>${datas.join('</td><td>')}</td></tr>`
const createRow = row => formatRow(Object.values(row))
tbody.innerHTML = ips.map(createRow).join('')
