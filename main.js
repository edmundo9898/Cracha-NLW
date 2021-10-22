const linksMedia = {
  github: 'Edmundo9898',
  facebook: 'ed.robertoX',
  instagram: 'edmundo_roberto_',
  youtube: 'GamesEduUu'
}

function changeSocial() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksMedia[social]}`
  }
}

changeSocial()

function getGitHubInfo() {
  const url = `https://api.github.com/users/${linksMedia.github}`

  fetch(url)
    .then(Response => Response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userHub.href = data.html_url
      userImg.src = data.avatar_url
      usersLogin.textContent = data.login
    })
}

getGitHubInfo()
