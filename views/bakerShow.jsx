const React = require('react')
const Default = require('./layouts/default')

function Show ({baker}) {
    const breadDisplay = baker.breads.map(bread => {
        return (
          <li key={bread._id}>
            <a href={`/breads/${bread._id}`}>
              {bread.name}
            </a>
          </li>
        )
        })
    return (
      <Default>
          <h3>{baker.name}</h3>
          <p>{baker.name} has been baking with us since {baker.startDate.getFullYear()}</p>
          <p>About {baker.name}: {baker.bio}</p>
          <h3>Breads {baker.name} has baked</h3>
          <ul>
            {breadDisplay}
          </ul>
      </Default>
    )
}

module.exports = Show