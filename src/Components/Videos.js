import React from 'react';
import { YoutubePlayer } from "reactjs-media";
import container from "react-bootstrap";

export default function Videos() {
    return (
        <div class = "container">
            <YoutubePlayer
                src="https://youtu.be/qfonrl2WJfs" // Reqiured
                width={1300}
                height={700}
            />
        </div>
    );
}