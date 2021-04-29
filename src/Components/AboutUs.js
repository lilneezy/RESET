import React from 'react';

export default function AboutUs() {
  return (
    <div>
    <body>
        <div id = "titlecard">
            <p>Reinventing Education in Science, Engineering, & Technology</p>
        </div>
        <div id = "about">
            <p id = "goal"> Our goal: inspire and strengthen STEM engagement
                among youth by reaching them in the classroom during the
                school day
                </p>
            <p>By introducing underprivileged kids to the fascinating world of
                science, engineering, and technology, we hope to show them that
                they're capable of enjoying and excelling in these
                highly employable fields, thus creating a brighter future
                both for themselves and for America.</p>
            <p>We're a nonprofit run by students, for students. Based out of
                the Loudoun Academy of Science, we have been working to make
                a difference since 2014.</p>
        </div>
        <div class = "set left" id = "sci">
            <h1>Science</h1>
            <p>We're delivering inquiry-based learning to elementary
                school classrooms with hands-on, in-school demos and
                entertaining videos with guided experiments that are
                specifically crafted with the fifth grade brain in mind. By
                allowing students to learn by doing instead of by reading out
                of a textbook or watching a lecture, we're making science fun
                and interesting again.</p>
        </div>
        <div class = "set right" id = "eng">
            <h1>Engineering</h1>
            <p>We offer an engineering competition that encourages students to 
                embrace the cycle of trying and failing until finally finding
                a solution: that is ultimately the heart of engineering.
                Students can develop valuable skills such as persistence and
                problem solving and experience the joy of hard-earned success
                all while engaging in healthy, fun competition with their peers. </p>
        </div>
        <div class = "set left" id = "tech">
            <h1>Technology</h1>
            <p>To address the lack of technology education in elementary
                schools, we host fun coding workshops to allow students to
                get their feet wet with computer science. By introducing them
                to these topics at a young age, we hope to make coding seem
                more accessible and less intimidating. This way, they can see
                that coding is something they are fully capable of, as well as
                that it can be fun and useful. </p>
        </div>
        <div class= "set center" id = "contact">
            <h1>Contact.</h1>
            <p> If you are interested in or would like to support RESET, please
                reach out to us! Any and all help is appreciated, whether you
                have ideas and suggestions, or wish to donate time and/or money,
                we want to hear about it! Contact <a href="mailto:raj.shrimali@resetinitiative.org">raj.shrimali@resetinitiative.org</a> 
                or <a href="mailto:clara.na@resetinitiative.org">clara.na@resetinitiative.org</a>
                and we'll get back to you as soon as we can.</p>
        </div>
    </body>
    </div>
  );
}