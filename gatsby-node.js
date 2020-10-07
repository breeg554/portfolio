const path = require("path")
const data = require("./src/dataContent/projects.json")

exports.createPages = ({ actions }) => {
  const { createPage } = actions

  const tempalte = path.resolve("./src/templates/Page.jsx")
  data.forEach(project => {
    const path = `/projects/${project.name}`
    createPage({
      path,
      component: tempalte,
      context: project,
    })
  })
}
