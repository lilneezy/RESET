import React from 'react';
import { YoutubePlayer } from "reactjs-media";

export default function Videos() {
    return (
        <div>
            <YoutubePlayer
                src="https://youtu.be/qfonrl2WJfs" // Reqiured
                width={650}
                height={600}
            />
        </div>
    );
}