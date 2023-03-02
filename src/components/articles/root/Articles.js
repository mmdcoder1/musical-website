import React from 'react';

//styles
import styles from './articles.module.css';

//components
import Article from '../article/Article';
import { articlesData } from './data';

const Articles = () => {
    return (
        <div className={`section-margin  flex gap-2 ${styles.container}`}>
            { articlesData.map(article => <Article key={article.id} article={article} />) }
        </div>
    );
};

export default Articles;