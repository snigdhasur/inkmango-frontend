import React from 'react'
import { Card } from 'semantic-ui-react'


class ArticleCard extends React.Component {
	render(){
		return(
			<Card
			href={this.props.article.article_url}
    		image={this.props.article.image_url}
    		header={this.props.article.title}
    		meta={this.props.article.category.name}
    		description={this.props.article.summary}
		     />
		)
	}
}

export default ArticleCard
