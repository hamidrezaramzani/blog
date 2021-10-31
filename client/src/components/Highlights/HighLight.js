import React from 'react'
import HighlightItem from './HighlightItem'
import { useQuery } from 'react-query'
import { getHighlights } from '../../api';
function HighLight() {
    const { data, isLoading } = useQuery("highlights", getHighlights);

    const renderSingleHighlight = () => {
        if (data) {
            return <HighlightItem {...data.data.reverse()[0]} />

        }
    }

    const renderMoreHightlights = () => {
        if (data) {
            return data.data.slice(1, data.data.length).map(item => (
                <HighlightItem {...item} key={item.id} />
            ))
        }
    }
    return (
        <div className="w-4/6 h-auto py-5 bg-teal-500 flex mx-auto ">
            {renderSingleHighlight()}
            <div className="w-3/6 h-auto flex flex-wrap">
                {renderMoreHightlights()}
            </div>
        </div>
    )
}

export default HighLight
