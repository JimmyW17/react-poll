var Form = React.createClass({

  render: function() {
    return (
      <div>
        <form action="/polls/new">
          <label>
            Title:<br />
            <input type="text" name="poll[title]" />
          </label>
          <br /><input type="submit" value="Create Poll" />
        </form>
      </div>
    )
  }
});
