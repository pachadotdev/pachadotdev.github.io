// hide all divs except the one with the id passed in
function showDiv(id) {
    var divs = document.getElementsByTagName("div");
    divs = Array.from(divs).filter(function (div) {
        return div.id != "title";
    });
    for (var i = 0; i < divs.length; i++) {
        if (divs[i].id == id) {
            divs[i].style.display = "block";
        } else {
            divs[i].style.display = "none";
        }
    }
}

// print a random quote from a list of quotes
function printRandomParagraph() {
    var paragraphs = [
        `<p>
        Borchert, Ingo, Mario Larch, Serge Shikher, and Yoto V. Yotov. 2021.
        “The International Trade and
        Production Database for
        Estimation (ITPD-E).”
        <em>International Economics (Paris)</em> 166: 140–66. <a href="https://doi.org/10.1016/j.inteco.2020.08.001">https://doi.org/10.1016/j.inteco.2020.08.001</a>.
        <p>`,
        `<p>
        Burgard, Jan Pablo, Joshua Kunst, Mauricio Vargas Sepúlveda, and Anna
        Lenna Woelwer. 2018. “Gravity: Estimation
        Methods for Gravity Models in
        R.” <em>Journal of Open Source Software</em> 31 (3):
        1038. <a href="https://doi.org/10.21105/joss.01038">https://doi.org/10.21105/joss.01038</a>.
        <p>`,
        `<p>
        Coates, Benjamin. 2022. “A Century of
        Sanctions.” <em>Origins</em>. <a href="https://origins.osu.edu/article/economic-sanctions-history-trump-global?language_content_entity=en">https://origins.osu.edu/article/economic-sanctions-history-trump-global?language_content_entity=en</a>.
        <p>`,
        `<p>
        Fajgelbaum, Pablo D., Pinelopi K. Goldberg, Patrick J. Kennedy, and Amit
        K. Khandelwal. 2020. “The Return to
        Protectionism.” <em>The Quarterly Journal of
        Economics</em> 135 (1): 1–55. <a href="https://doi.org/10.1093/qje/qjz036">https://doi.org/10.1093/qje/qjz036</a>.
        <p>`,
        `<p>
        Felbermayr, Gabriel, Aleksandra Kirilakha, Constantinos Syropoulos,
        Erdal Yalcin, and Yoto V. Yotov. 2020. “The Global Sanctions Data
        Base.” <em>European Economic Review</em> 129: 103561–61. <a href="https://doi.org/10.1016/j.euroecorev.2020.103561">https://doi.org/10.1016/j.euroecorev.2020.103561</a>.
        <p>`,
        `<p>
        Larch, Mario, José-Antonio Monteiro, Roberta Piermartini, and Yoto V
        Yotov. 2016. <em>An Advanced Guide to Trade Policy Analysis:
        The Structural Gravity Model</em>. World Trade Organization
        Geneva. <a href="https://vi.unctad.org/tpa/web/vol2/vol2home.html">https://vi.unctad.org/tpa/web/vol2/vol2home.html</a>.
        <p>`,
        `<p>
        Lasswell, Harold D. 1970. “The Emerging
        Conception of the Policy
        Sciences.” <em>Policy Sciences</em> 1 (1): 3–14. <a href="https://doi.org/10.1007/BF00145189">https://doi.org/10.1007/BF00145189</a>.
        <p>`,
        `<p>
        Morgan, T. Clifton, Constantinos Syropoulos, and Yoto Yotov. 2022.
        “Economic Sanctions: Evolution,
        Consequences, and Challenges.”
        <em>School of Economics Working Paper Series</em>, November. <a href="https://ideas.repec.org//p/ris/drxlwp/2022_012.html">https://ideas.repec.org//p/ris/drxlwp/2022_012.html</a>.
        <p>`,
        `<p>
        Ossa, Ralph. 2014. “Trade Wars and Trade
        Talks with Data.” <em>American Economic
        Review</em> 104 (12): 4104–46. <a href="https://doi.org/10.1257/aer.104.12.4104">https://doi.org/10.1257/aer.104.12.4104</a>.
        <p>`,
        `<p>
        Sbragia, Alberta. 2010. “The EU, the US,
        and Trade Policy: Competitive Interdependence in the Management of
        Globalization.” <em>Journal of European Public Policy</em> 17
        (3): 368–82. <a href="https://doi.org/10.1080/13501761003662016">https://doi.org/10.1080/13501761003662016</a>.
        <p>`,
        `<p>
        Simeon, Richard. 1976. “Studying Public
        Policy.” <em>Canadian Journal of Political
        Science/Revue Canadienne de Science Politique</em> 9 (4): 548–80. <a href="https://doi.org/10.1017/S000842390004470X">https://doi.org/10.1017/S000842390004470X</a>.
        <p>`,
        `<p>
        The Economist. 2021. “Sanctions Are Now a Central Tool of
        Governments’ Foreign Policy.” <em>The Economist</em>. <a href="https://www.economist.com/finance-and-economics/2021/04/22/sanctions-are-now-a-central-tool-of-governments-foreign-policy">https://www.economist.com/finance-and-economics/2021/04/22/sanctions-are-now-a-central-tool-of-governments-foreign-policy</a>.
        <p>`,
        `<p>
        Vargas Sepúlveda, Mauricio. 2020. <em>Leontief: Input-Output
        Analysis</em>. <a href="https://CRAN.R-project.org/package=leontief">https://CRAN.R-project.org/package=leontief</a>.
        <p>`,
        `<p>
        Vargas Sepúlveda, Mauricio. 2021. <em>Solutions Manual for An
        Advanced Guide to Trade
        Policy Analysis in R</em>. 2nd
        ed. UN ESCAP. <a href="https://r.tiid.org/R_structural_gravity/">https://r.tiid.org/R_structural_gravity/</a>.
        <p>`,
        `<p>
        Walter, Stefanie. 2021. “The Backlash Against
        Globalization.” <em>Annual Review of Political Science</em> 24
        (1): 421–42. <a href="https://doi.org/10.1146/annurev-polisci-041719-102405">https://doi.org/10.1146/annurev-polisci-041719-102405</a>.
        <p>`
    ];
    var randomParagraph = paragraphs[Math.floor(Math.random() * paragraphs.length)];
    // print the random paragraph
    document.write(randomParagraph);
}
