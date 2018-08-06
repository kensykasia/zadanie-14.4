var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    img: 'https://cdn-2.cdp.pl/media/catalog/product/1/3/13916_0.jpg'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o lwie',
    img: 'https://i1.fdbimg.pl/zja8r5u1/1070x1500_ntfk9k.jpg'
  },
  {
    id: 3,
    title: 'Shrek',
    desc: 'Film o zielonym ogrze',
    img: 'https://i1.fdbimg.pl/ybu3hk/580x859_kl6pl1.jpg'
  },
  {
    id: 4,
    title: 'Madagaskar',
    desc: 'Film o egzotycznych zwięrzetach w zoo',
    img: 'https://i.pinimg.com/originals/64/2a/3e/642a3e292437f9ee0722b722a08e447e.jpg'
  }
];

var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('li', {},
          React.createElement(MovieTitle, {title: this.props.movie.title}),
          React.createElement(MovieDesc, {desc: this.props.movie.desc}),
          React.createElement(MovieImage, {img: this.props.movie.img})
        )
    )
  }
});
var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement('h2',{}, this.props.title)
    )
  }
});

var MovieDesc = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },
  render: function () {
    return (
      React.createElement('p', {}, this.props.desc)
    )
  }
});

var MovieImage = React.createClass({
  propTypes: {
    img: React.PropTypes.string.isRequired,
  },
  render: function() {
    return (
      React.createElement('img', {src: this.props.img})
    )
  }
});

var MovieList = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired,
  },

  render: function() {
    var items = this.props.movies.map(function(movie) {
      return (
        React.createElement(Movie, {key: movie.id, movie: movie})
      )
      });
    return (
      React.createElement('ul', {}, items)
    )
    }

});

var element = React.createElement(MovieList, {movies: movies});
var element =
React.createElement('div', {},
  React.createElement('h1', {}, 'Lista filmów'),
  React.createElement(MovieList, {movies: movies}));
ReactDOM.render(element, document.getElementById('app'));
