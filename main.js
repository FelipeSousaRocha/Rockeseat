const links = {
  github: 'FelipeSousaRocha',
  youtube: 'UCfePZXbzrkqg3xBsyDCMfzw',
  facebook: 'bsoimfelipe',
  instagram: 'programmingtheworld.py',
  twitter: 'ProgramingTW'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[1].href = `https://${social}.com/${links[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  //template string
  const url = `https://api.github.com/users/${links.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
