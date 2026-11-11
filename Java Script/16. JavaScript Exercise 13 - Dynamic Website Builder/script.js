function createcard(title, cname, views, months, img_url, durtion) {

    let t = document.querySelector(".title")
    t.innerHTML = title
    console.log(t)

    let c = document.querySelector(".channel_name")
    c.innerHTML = cname
    console.log(c)

    let v = document.querySelector(".views")
    if (views >= 1000000) {
        views = Math.trunc(views / 1000000)
        v.innerHTML = `${views}M  views`
    }
    else if (views >= 10000) {
        views = Math.trunc(views / 1000)
        v.innerHTML = `${views}K  views`
    }
    else if (views >= 1000) {
        views = Math.trunc(views / 1000)
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


const button = document.getElementById("button")

button.addEventListener('click', () => {


    let title = document.getElementById("title").value
    let cname = document.getElementById("cname").value
    let durtion = document.getElementById("durtion").value
    let views = document.getElementById("views").value
    let months = document.getElementById("months").value
    let img = document.getElementById("img").value

    createcard(title, cname, views, months, img, durtion)
})
