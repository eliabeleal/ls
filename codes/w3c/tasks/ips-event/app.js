// class AddIpComponent {
//
// }
//
// class IPTableComponent {
//
// }
//
// const iPTableComponent = new IPTableComponent()
// const addIpComponent = new AddIpComponent()
// iPTableComponent.render()


const addButton = document.querySelector('#add-button')
const ipInput = document.querySelector('#ip-input')
const maskInput = document.querySelector('#mask-input')
const tbody = document.querySelector('#ips tbody')

addButton.addEventListener('click', function(event){
  tbody.insertAdjacentHTML('afterbegin', `<tr>
    <td>${ipInput.value}</td>
    <td>${maskInput.value}</td>
    <td><i class="material-icons">clear</i></td>
  </tr>`)

  const clear = tbody.querySelector('tr:first-of-type .material-icons')
  clear. addEventListener('click', function(event){
    event.target.parentNode.parentNode.remove()
  })

  ipInput.value = ''
  maskInput.value = ''
})
