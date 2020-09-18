const path = require('path')
const fs = require('fs')
const dir = require('node-dir')

const hasConflict = (str) => {
  return /<<<<<<< HEAD/.test(str)
}
const srcRegex = new RegExp(
`<<<<<<< HEAD
([^\\n]*)
((\\n[^\\n]*)+)
=======((\\n- [^\\n]*)+)
>>>>>>> real_origin\\\/master`
)

dir.paths(path.resolve(__dirname, '../snippets'), true, function(err, paths) {
  if (err) throw err

  paths.forEach((p) => {
    fs.readFile(p, 'utf8', (err, data) => {
      if (err) throw err

      if (hasConflict(data)) {
        let matches = data.match(srcRegex)
        if (matches && matches[2].replace(/\s/g, '') === matches[4].replace(/(\n(\s*)- |\s)/g, '')) {
          data = data.replace(srcRegex, '$1\n$4')
          fs.writeFile(p, data, () => {
            if (err) throw err
  
            console.log(p)
          })
        } else {
          console.log('not support', p)
        }
      }
    })
  })
})
