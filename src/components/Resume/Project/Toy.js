/* eslint-disable*/
import React from 'react';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';

const Toy = ({
                 data: {
                     name, position, url, startDate, summary, highlights,
                 },
             }) => (
    <article className="jobs-container">
        <header>
            <h4><a href={url}>{name}</a> | {position}</h4>
            <div className="summary">{summary}</div>
        </header>
        {highlights ? (
            <ul className="points">
                {highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                ))}
            </ul>
        ) : null}
    </article>
);

export default Toy;
