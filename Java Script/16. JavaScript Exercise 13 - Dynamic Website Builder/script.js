function createcard(title, cname, views, months, img_url , durtion) {

    let t = document.querySelector(".title")
    t.innerHTML = title
    console.log(t)

    let c = document.querySelector(".channel_name")
    c.innerHTML = cname
    console.log(c)

    let v = document.querySelector(".views")
    if (Math.trunc(views % 10000) == 0) {
        views = Math.trunc(views/10000)
        v.innerHTML = `${views}M  views`
    }
    else if (Math.trunc(views % 1000) == 0) {
        views = Math.trunc(views/1000)
        v.innerHTML = `${views}K  views`
    }
    else {

        v.innerHTML = `${views}  views`
    }
    console.log(v)

    let m = document.querySelector(".month")
    m.innerHTML = `${months}  months ago`
    console.log(m)

    let i = document.querySelector(".yt").firstElementChild
    i.setAttribute("src", img_url)
    console.log(i)

    let d = document.querySelector(".durtion")
    d.innerHTML = durtion
    console.log(d)
}

let title = prompt("enter video title :")
let cname = prompt("enter channel-name :")
let durtion = prompt("enter durtion of video :")
let views = parseInt(prompt("enter number of views :"))
let months = parseInt(prompt("enter number of month publish :"))
let img = (prompt("enter thumbnail url :"))

createcard(title, cname, views, months, img , durtion)