import React from 'react'
import ArticleCard from './ArticleCard'
import { Card } from 'semantic-ui-react'

class CardList extends React.Component {


	render(){
		console.log(this.props.country, "COUNTRY")
		// const regex = /india|asia|myanmar|burma|pakistan|afghanistan|sri|lanka|bangladesh/i
		// const filteredArticles = this.props.articles.filter(article => regex.test(article.title) || regex.test(article.summary))
		const filteredArticles = this.props.articles.filter(article => article.title.toLowerCase().includes(this.props.country) || article.summary.toLowerCase().includes(this.props.country))
		const articleCards = filteredArticles.map((article, index) => <ArticleCard key={index} article={article} />)
		return (
			<Card.Group>
				{articleCards}
			</Card.Group>
			)
	}
}

export default CardList