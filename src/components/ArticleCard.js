import React from 'react'
import { Card, Image } from 'semantic-ui-react'


class ArticleCard extends React.Component {
	render(){
		return(
			<Card
			href={this.props.article.article_url}
		     >
		     <Image src={this.props.article.image_url}  
		            label={{ as: 'a', color: 'orange', content: this.props.article.source.publication, icon: 'newspaper', ribbon: true }}
		     />
		     <Card.Content>
		     	<Card.Header>{this.props.article.title} </Card.Header>
		     	<Card.Meta>{this.props.article.category.name}</Card.Meta>
      			<Card.Description>{this.props.article.summary}</Card.Description>
		     </Card.Content>
		    </Card>
		)
	}
}

export default ArticleCard