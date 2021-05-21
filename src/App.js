import React from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import NewsList from './components/NewsList/NewsList'
import Weather from './components/Weather/Weather';
import wordsToNumbers from 'words-to-numbers';
import './index.css'
import InfoCardsList from './components/InfoCardsList/InfoCardsList';
function App() {

  const API_KEY = '185c10b1d1f12308ac879c13ee80a7962e956eca572e1d8b807a3e2338fdd0dc/stage';
  const [news, setNews] = React.useState([])
  const [weather, setWeather] = React.useState({})
  const [activeArticle, setActiveArticle] = React.useState(-1)
  const [closeWeather, setCloseWeather] = React.useState(false)
  React.useEffect(() => {
    alanBtn({
      key: API_KEY,
      onCommand: ({ command, articles, weatherItem, number }) => {

        if (command === 'newHeadlines') {
          setNews(articles)
        }

        if (command === 'highlight') {
          setActiveArticle((prev) => prev + 1);

        }
        if (command === 'open') {
          const parsedNumber = number?.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          } else {
            alanBtn().playText('Please try that again...');
          }
        }

        if (command === 'weather') {
          setWeather(weatherItem)
          setCloseWeather(false)
        }
        if (command === 'close') {
          setCloseWeather(true)
        }
      }
    })
  }, [])

  return (
    <div className="app">
      <h1 className="app-title">Voice assistant Alan</h1>
      <NewsList news={news} activeArticle={activeArticle} />
      {!closeWeather
        && <Weather {...weather} />}
      {!news.length && <InfoCardsList/>}
    </div>
  );
}

export default App;
