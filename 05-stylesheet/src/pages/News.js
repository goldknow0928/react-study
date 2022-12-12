import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import NewsCard from '../components/NewsCard';
import NewsList from '../components/NewsList';
import NewsData from '../NewsData';

const News = () => {

    const MyNav = styled.nav`
        .nav {
            &-link {
                font-family: fantasy;
                font-size: 18px;
                text-decoration: none;
                color: #222;

                &:first-child:after {
                    content: "|";
                    display: inline-block;
                    padding: 0 15px;
                    color: #222;
                }
            }
        }
    `;

    return (
        <div>
            <MyNav>
                <Link to='news_card' className='nav-link'>NewsCard</Link>
                <Link to='news_list' className='nav-link'>NewsList</Link>                
            </MyNav>
            <hr />
            <Routes>
                {/* /news 일때 보여지게 */}
                <Route path='/' element={<NewsCard news={NewsData} />} exact={true} />
                <Route path='news_card' element={<NewsCard news={NewsData} />} />
                <Route path='news_list' element={<NewsList news={NewsData} />} />
            </Routes>
        </div>
    );
};

export default News;