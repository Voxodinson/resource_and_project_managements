import cssStyleSheet from "./cssStyleSheet";


const usePrint = (container: HTMLElement, data: object | any): void => {
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
                <title>tttt</title>
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
                ${cssStyleSheet}
            </head>
            <body
                class="p-0 m-0">
                <div
                    class="d-flex justify-content-center align-items-center flex-column">
                    <div
                        class="report-logo">
                        <img
                            src="${data.image_url}"
                            class="w-100 h-100 object-fit-scale"
                            alt="${data.name}"
                            loading="lazy"/>
                    </div>
                    <p
                        class="p-0 m-0 text-center moul-regular fs-5">${data.name_km ?? ''}</p>
                    <p
                        class="p-0 m-0 text-center fs-5">${data.name ?? ''}</p>
                    <p
                        class="p-0 m-0 text-center fs-5">${data.date_range ?? ''}</p>
                </div>
                ${container.outerHTML}
            </body>
        </html>`);

        iframeDoc.close();
        iframe.contentWindow?.focus();
        iframe.contentWindow?.print();
    }
}

export default usePrint;