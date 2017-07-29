const addressInput = document.querySelector('#address-input')
const ipInfoBtn = document.querySelector('#ip-info-btn')
const ipInfoField = document.querySelector('#ip-info')

// loading event
ipInfoBtn.addEventListener('click', () => {
  ipInfoField.innerHTML = '<img src="img/loading.gif">'
  let address = addressInput.value
  let url = `https://ipinfo.io/${address}/json`

  // generating ipinfo table and map
  fetch(url)
    .then(res => res.json())
    .then(ipInfo => {
      // creating table
      const createRow = info => `<tr><td>${info[0]}</td><td>${info[1]}</td></tr>`
      let rows = Object.entries(ipInfo).map(createRow).join('')
      let thead = '<thead><tr><th>Field</th><th>Value</td></tr></thead>'
      let table = `<table>${thead}<tbody>${rows}</tbody></table>`

      // creating image map
      // http://staticmapmaker.com/
      let mapURL = `https://maps.googleapis.com/maps/api/staticmap?center=${ipInfo.loc}&zoom=13&scale=1&size=600x300&maptype=terrain&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0x558B2F%7Clabel:%7C${ipInfo.loc}`
      let map = `<img src="${mapURL}">`

      ipInfoField.innerHTML = table+map
    })
})
