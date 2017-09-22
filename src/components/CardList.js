import React from 'react'
import ArticleCard from './ArticleCard'
import { Card } from 'semantic-ui-react'

class CardList extends React.Component {


	render(){
		const regex = /india|asia|myanmar|burma|pakistan|afghanistan|sri|lanka|bangladesh/i
		const filteredArticles = this.props.articles.filter(article => regex.test(article.title) || regex.test(article.summary))
		const articleCards = filteredArticles.map((article, index) => <ArticleCard key={index} article={article} />)
		return (
			<Card.Group>
				{articleCards}
			</Card.Group>
			)
	}
}

export default CardList