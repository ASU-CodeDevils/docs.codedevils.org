/**
 * Parses the docsify-generated markdown text for instance of a custom image
 * accessory tag and replaces it with a formatted html table. An image accessory
 * component is formatted as:
 *  <: Text | <img ... > :> or <: <img ...> | Text :>
 *
 * @author Kevin Shelley (kevin.shelley@asu.edu)
 * @version 1.01
 */
(function () {
    /**
     * Cleans the component and returns it as an array.
     * @param component The custom image accessory component as a string.
     * @returns {string[]} The component cleaned and split by an array.
     */
    function getComponentsArray(component) {
        let cleanedComp = component.trim().substr(2, component.length - 4);
        return cleanedComp.split('|');
    }

    /**
     * Converts a component to an html table string.
     * @param components The custom image accessory tag component as a string.
     * @returns {string} The custom image accessory tag as an html table string.
     */
    const componentToHtmlTable = components => {
        let table = ['<table class="image-accessory"><tr>'];
        const component = getComponentsArray(components);
        table.push('<td>' + component[0] + '</td>');
        table.push('<td>' + component[1] + '</td>');
        table.push('</tr></table>');
        return table.join('');
    };

    /**
     * Parses the docsify-rendered markdown content and replaces each instance of the
     * custom image accessory tag. If none exists, the content is returned.
     * @param content The docsify-rendered markdown content.
     * @returns {*|void|string} The content with custom image accessory tags replaced
     *  by html tables.
     */
    const before = content => {
        let imageStamps = content.match(/<:.*?:>/g);
        if(!imageStamps) return content;

        let tableComponent;
        for(let i = 0; i < imageStamps.length; i++) {
            tableComponent = componentToHtmlTable(imageStamps[i]);
            content = content.replace(imageStamps[i], tableComponent);
        }
        console.log(content);
        return content;
    };

    /**
     * Parses the docsify-rendered markdown content and replaces each instance of the
     * custom image accessory tag. If none exists, the content is returned.
     * @param hook The docsify hook.
     */
    const imageParser = hook => {
        hook.beforeEach(content => before(content));
    };

    $docsify.plugins = [].concat(imageParser, $docsify.plugins);
}());
