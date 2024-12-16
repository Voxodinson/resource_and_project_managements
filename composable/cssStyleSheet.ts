const cssStyleSheet = `<style type="text/css">
@media page{
  .header,
  .footer {
    display: none !important;
  }
  
  @page{
    margin: 0 !important;
    size: 80mm auto;
  }

  html,
  body {
    margin: 0 !important;
    padding: 0 !important;
    width: 100% !important;
    height: 100% !important;
    display: flex;
    justify-content: center;
  }

  *,
  body{
    margin: 0 !important;
    padding: 0 !important;
    overflow-clip-margin: box-sizing;
    border-box: box-sizing;
  }

  .title{
    font-size: 13px !important;
    font-weight: 500;
  }
}

body{
  margin: 0 !important;
  padding: 0 !important;
}
*::-webkit-scrollbar {
  display: none;
}

*{
  font-size: 10px;
}

.title{
  font-size: 12px !important;
  font-weight: 500;
}

table {
  text-indent: 0;
  border-color: inherit;
  border-collapse: collapse;
}

table  *{
  font-size: 9px;
}

.wh-logo{
  width: 5em;
  height: 5em;
}

.h-full{
  height: 100%;
}

.w-full{
  width: 100%;
}

.flex{
  display: flex;
}

.flex-col{
  flex-direction: column;
}

.w-half{
  width: 50%;
}

.block{
  display: block;
}

.border{
  border-width: 1px;
}

.border-solid{
  border-style: solid;
}

.border-black{
  border-color: rgb(0 0 0);
}

.text-center{
  text-align: center;
}

.justify-between{
  justify-content: space-between;
}

.items-center{
  align-items: center;
}
  
.m-0{
  margin: 0px;
}

.flex-wrap{
  flex-wrap: wrap;
}

.py-2{
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.justify-end{
  justify-content: flex-end;
}

.object-scale-down{
  -o-object-fit: scale-down;
  object-fit: scale-down;
}

.font-medium{
  font-weight: 500;
}

.text-xl{
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.p-0{
  padding: 0px;
}

.gap-y-2{
  row-gap: 0.5rem;
}

.gap-x-2{
  -moz-column-gap: 0.5rem;
  column-gap: 0.5rem;
}

.my-15{
  margin-top: 0.375rem;
  margin-bottom: 0.375rem;
}

.uppercase{
  text-transform: uppercase;
}

.justify-center{
  justify-content: center;
}

.moul{
  font-family: Moul;
}

.khmer-regular{
  font-family: "Khmer", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.px-2{
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.py-1{
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.font-semibold{
  font-weight: 600;
}

.moul-regular{
  font-family: "Moul", serif;
  font-weight: 400;
  font-style: normal;
}

.gap-5{
  gap: 1.25rem;
}

.w-fit{
  width: fit-content;
}

.max-w-32{
  max-width: 8rem;
}

.hidden{
  display: none;
}

.text-nowrap{
  text-wrap: nowrap;
}

.wh-qr{
  width: 150px;
  height: 150px;
}

.overflow-hidden{
  overflow: hidden;
}

.rounded-md{
  border-radius: 0.375rem;
}

.report-logo{
  width: 100px;
  height: 100px;
}

.w-bottom-box{
  width: 160px;
}
</style>`;

export default cssStyleSheet;