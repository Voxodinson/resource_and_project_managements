import cssStyleSheet from "./cssStyleSheet";

const usePrint = (container: HTMLElement): void => {
    const iframe = document.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.width = '0';
    iframe.style.height = '0';
    iframe.style.border = 'none';
    document.body.appendChild(iframe);
    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;

    if(iframeDoc)
    {
        iframeDoc.open();
        iframeDoc.write(`<html>
            <head>
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"/>
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Khmer&display=swap"
                    rel="stylesheet"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Moul&display=swap"
                    rel="stylesheet"/>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"/>
                <title>Print</title>
                ${cssStyleSheet}
            </head>
            <body>
                ${container.outerHTML}
            </body>
        </html>`);
        
        iframeDoc.close();
        iframe.contentWindow?.focus();
        iframe.contentWindow?.print();
    }
}

export default usePrint;