import gsap from "gsap"

export const slideInTopAnimation = (elements, duration) => {
  const tl = gsap.timeline({ defaults: { ease: "power4.easeOut" } })
  gsap.set(elements, { autoAlpha: 0, y: "+=10px" })
  tl.staggerTo(elements, duration, { y: 0, autoAlpha: 1 }, 0.2)
}
export const aboutSvgAnimation = img => {
  const man = img.querySelector("#man")
  const reactIcon = img.querySelector("#react-icon")
  const floor = img.querySelector("#floor")
  const table = img.querySelector("#table")
  const device = img.querySelector("#device")
  const flower = img.querySelector("#flower")
  const tl = gsap.timeline()
  gsap.set([man, floor, table, device, flower], { autoAlpha: 0 })
  gsap.set(img, { autoAlpha: 1 })
  tl.staggerFromTo(
    [floor, table, device, man, flower],
    1,
    { y: "+=10px" },
    { y: 0, autoAlpha: 1, ease: "power3.easeInOut" },
    0.2
  ).to(reactIcon, {
    transformOrigin: "50% 50%",
    rotate: "180deg",
    duration: 3,
    repeat: -1,
    ease: "linear",
  })
}

export const svgChangeSkills = (skillsToOn, skillsToOff) => {
  const tl = gsap.timeline()
  tl.to(skillsToOn, { autoAlpha: 1, duration: 0.5 }, "time").to(
    skillsToOff,
    { autoAlpha: 0, duration: 0.2 },
    "time"
  )
}
export const skillsSvgAnimation = wrapper => {
  const man = wrapper.querySelector("#man")
  const background = wrapper.querySelector("#background")
  const floor = wrapper.querySelector("#floor")
  const board = wrapper.querySelector("#board")
  const frontend = wrapper.querySelector("#frontend")
  const backend = wrapper.querySelector("#backend")
  const tl = gsap.timeline()
  gsap.set([man, board, background, floor, frontend, backend], {
    autoAlpha: 0,
  })
  tl.to(floor, { autoAlpha: 1, duration: 0.2 })
    .staggerFromTo(
      [board, background],
      1,
      { y: "+=10px" },
      { y: 0, autoAlpha: 1 },
      0.4
    )
    .fromTo(man, { x: "+=50px" }, { x: 0, autoAlpha: 1, duration: 0.3 })
    .to(frontend, { autoAlpha: 1, duration: 0.3 })
}

const showRocketSvg = (head, man, flowers, background, rocket) => {
  const tl = gsap.timeline({ paused: true })
  tl.staggerFromTo(
    [...background.children, man, rocket, ...flowers],
    1,
    { y: "+=10px" },
    { y: 0, autoAlpha: 1, delay: 0.2 },
    0.2
  )
    .to(head, {
      transformOrigin: "100% 100%",
      rotate: "-10deg",
      duration: 1,
    })
    .to(head, { rotate: 0, duration: 1, delay: 0.5 })
  return tl
}
const flameAnime = flame => {
  const tl = gsap.timeline({ paused: true, repeat: -1, ease: "power3.inOut" })
  tl.to(flame, { autoAlpha: 1, duration: 0.3 }).to(flame, {
    autoAlpha: 0,
    duration: 1,
    delay: 1,
  })
  return tl
}
const rocketAnime = rocket => {
  const tl = gsap.timeline({
    paused: true,
    repeat: -1,
    ease: "power4.inOut",
  })
  tl.to(rocket, { y: "-=20px", duration: 0.5 })
    .to(rocket, { y: "+=10px", duration: 0.3 })
    .to(rocket, { y: "-=20px", duration: 0.5 })
    .to(rocket, { y: 0, duration: 1 })

  return tl
}

export const allRocketAnimation = wrapper => {
  const rocket = wrapper.querySelector("#rocket")
  const flame = wrapper.querySelector("#flame")
  const man = wrapper.querySelector("#man")
  const head = wrapper.querySelector("#head")
  const flowers = [...wrapper.querySelectorAll("#flower")]
  const background = wrapper.querySelector("#background")
  gsap.set([flame, man, flowers, background.children, rocket], {
    autoAlpha: 0,
  })
  gsap.set(wrapper, {
    autoAlpha: 1,
  })
  const showTl = showRocketSvg(head, man, flowers, background, rocket)
  const rocketTl = rocketAnime(rocket)
  const flameTl = flameAnime(flame)

  const master = gsap.timeline()
  master
    .add(showTl.play())
    .add(flameTl.play(), "starts fly")
    .add(rocketTl.play(), "starts fly")
}
