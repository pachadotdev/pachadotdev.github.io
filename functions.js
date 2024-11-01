// write the header just once
function loadHeader() {
    var headerHTML = `
    <div id="title" style="text-align: center;">
        <h1>Mauricio "Pachá" Vargas Sepúlveda</h1>
        <a href="index.html">About me</a>
        <a href="research.html">Research</a>
        <a href="open-source.html">Open Source</a>
        <a href="class-notes.html">Class Notes</a>
        <a href="datasets.html">Datasets</a>
        <a href="books.html">Books</a>
        <a href="training-and-consultancy.html">Training and Consultancy</a>
        <a href="replication.html">Replication</a>
        <a href="https://pacha.dev/blog">Blog</a>
    </div>
    <p id="random-paragraph">
        <b>Random reference of the day (brought to you with JavaScript)</b>:
    </p>
    `;
    document.getElementById('header').innerHTML = headerHTML;
    printRandomParagraph(); // Call the function after setting the inner HTML
}

// print a random quote from a list of quotes
function printRandomParagraph() {
    var paragraphs = [
        `Borchert, Ingo, Mario Larch, Serge Shikher, and Yoto V. Yotov. 2021.
        “The International Trade and
        Production Database for
        Estimation (ITPD-E).”
        <em>International Economics (Paris)</em> 166: 140–66. <a href="https://doi.org/10.1016/j.inteco.2020.08.001">https://doi.org/10.1016/j.inteco.2020.08.001</a>.`,
        `Burgard, Jan Pablo, Joshua Kunst, Mauricio Vargas Sepúlveda, and Anna
        Lenna Woelwer. 2018. “Gravity: Estimation
        Methods for Gravity Models in
        R.” <em>Journal of Open Source Software</em> 31 (3):
        1038. <a href="https://doi.org/10.21105/joss.01038">https://doi.org/10.21105/joss.01038</a>.`,
        `Coates, Benjamin. 2022. “A Century of
        Sanctions.” <em>Origins</em>. <a href="https://origins.osu.edu/article/economic-sanctions-history-trump-global?language_content_entity=en">https://origins.osu.edu/article/economic-sanctions-history-trump-global?language_content_entity=en</a>.`,
        `Fajgelbaum, Pablo D., Pinelopi K. Goldberg, Patrick J. Kennedy, and Amit
        K. Khandelwal. 2020. “The Return to
        Protectionism.” <em>The Quarterly Journal of
        Economics</em> 135 (1): 1–55. <a href="https://doi.org/10.1093/qje/qjz036">https://doi.org/10.1093/qje/qjz036</a>.`,
        `Felbermayr, Gabriel, Aleksandra Kirilakha, Constantinos Syropoulos,
        Erdal Yalcin, and Yoto V. Yotov. 2020. “The Global Sanctions Data
        Base.” <em>European Economic Review</em> 129: 103561–61. <a href="https://doi.org/10.1016/j.euroecorev.2020.103561">https://doi.org/10.1016/j.euroecorev.2020.103561</a>.`,
        `Larch, Mario, José-Antonio Monteiro, Roberta Piermartini, and Yoto V
        Yotov. 2016. <em>An Advanced Guide to Trade Policy Analysis:
        The Structural Gravity Model</em>. World Trade Organization
        Geneva. <a href="https://vi.unctad.org/tpa/web/vol2/vol2home.html">https://vi.unctad.org/tpa/web/vol2/vol2home.html</a>.`,
        `Lasswell, Harold D. 1970. “The Emerging
        Conception of the Policy
        Sciences.” <em>Policy Sciences</em> 1 (1): 3–14. <a href="https://doi.org/10.1007/BF00145189">https://doi.org/10.1007/BF00145189</a>.`,
        `Morgan, T. Clifton, Constantinos Syropoulos, and Yoto Yotov. 2022.
        “Economic Sanctions: Evolution,
        Consequences, and Challenges.”
        <em>School of Economics Working Paper Series</em>, November. <a href="https://ideas.repec.org//p/ris/drxlwp/2022_012.html">https://ideas.repec.org//p/ris/drxlwp/2022_012.html</a>.`,
        `Ossa, Ralph. 2014. “Trade Wars and Trade
        Talks with Data.” <em>American Economic
        Review</em> 104 (12): 4104–46. <a href="https://doi.org/10.1257/aer.104.12.4104">https://doi.org/10.1257/aer.104.12.4104</a>.`,
        `Sbragia, Alberta. 2010. “The EU, the US,
        and Trade Policy: Competitive Interdependence in the Management of
        Globalization.” <em>Journal of European Public Policy</em> 17
        (3): 368–82. <a href="https://doi.org/10.1080/13501761003662016">https://doi.org/10.1080/13501761003662016</a>.`,
        `Simeon, Richard. 1976. “Studying Public
        Policy.” <em>Canadian Journal of Political
        Science/Revue Canadienne de Science Politique</em> 9 (4): 548–80. <a href="https://doi.org/10.1017/S000842390004470X">https://doi.org/10.1017/S000842390004470X</a>.`,
        `The Economist. 2021. “Sanctions Are Now a Central Tool of
        Governments’ Foreign Policy.” <em>The Economist</em>. <a href="https://www.economist.com/finance-and-economics/2021/04/22/sanctions-are-now-a-central-tool-of-governments-foreign-policy">https://www.economist.com/finance-and-economics/2021/04/22/sanctions-are-now-a-central-tool-of-governments-foreign-policy</a>.`,
        `Vargas Sepúlveda, Mauricio. 2020. <em>Leontief: Input-Output
        Analysis</em>. <a href="https://CRAN.R-project.org/package=leontief">https://CRAN.R-project.org/package=leontief</a>.`,
        `Vargas Sepúlveda, Mauricio. 2021. <em>Solutions Manual for An
        Advanced Guide to Trade
        Policy Analysis in R</em>. 2nd
        ed. UN ESCAP. <a href="https://r.tiid.org/R_structural_gravity/">https://r.tiid.org/R_structural_gravity/</a>.`,
        `Walter, Stefanie. 2021. “The Backlash Against
        Globalization.” <em>Annual Review of Political Science</em> 24
        (1): 421–42. <a href="https://doi.org/10.1146/annurev-polisci-041719-102405">https://doi.org/10.1146/annurev-polisci-041719-102405</a>.`
    ];
    var randomParagraph = paragraphs[Math.floor(Math.random() * paragraphs.length)];
    // print the random paragraph
    document.getElementById('random-paragraph').innerHTML += randomParagraph;
}

// email to avoid spam
function setEmail() {
    var user = 'm.sepulveda';
    var domain = 'mail.utoronto.ca';
    var element = document.getElementById('email');
    element.innerHTML = '<a href="mailto:' + user + '@' + domain + '">' + user + '@' + domain + '</a>';
}
document.addEventListener('DOMContentLoaded', setEmail);

function setEmail2() {
    var user = 'm.sepulveda';
    var domain = 'mail.utoronto.ca';
    var element = document.getElementById('email2');
    element.innerHTML = '<a href="mailto:' + user + '@' + domain + '">' + user + '@' + domain + '</a>';
}
document.addEventListener('DOMContentLoaded', setEmail2);

window.onload = function () {
    function replaceQuotes(node) {
        if (node.nodeType === 3) { // Text node
            node.nodeValue = node.nodeValue.replace(/"([^"]*)"/g, '“$1”').replace(/'([^']*)'/g, '‘$1’');
        } else {
            var children = node.childNodes;
            for (var i = 0; i < children.length; i++) {
                replaceQuotes(children[i]);
            }
        }
    }

    replaceQuotes(document.body);
};
