import { http, HttpResponse } from 'msw';
import {
  chartList,
  whookList,
  eventList,
  newsList,
  storeList,
  chargeList,
  awardsList,
  whosfanList,
} from '../util/data';

export const handlers = [
  http.get('/api/chartContent', ({ request }) => {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page'));
    return HttpResponse.json({ content: chartList.slice(page, page + 8) });
  }),

  http.get('/api/whookContent', ({ request }) => {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page'));
    return HttpResponse.json({ content: whookList.slice(page, page + 8) });
  }),
  http.get('/api/eventContent', ({ request }) => {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page'));
    return HttpResponse.json({ content: eventList.slice(page, page + 8) });
  }),
  http.get('/api/newsContent', ({ request }) => {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page'));
    return HttpResponse.json({ content: newsList.slice(page, page + 8) });
  }),
  http.get('/api/storeContent', ({ request }) => {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page'));
    return HttpResponse.json({ content: storeList.slice(page, page + 8) });
  }),
  http.get('/api/chargeContent', ({ request }) => {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page'));
    return HttpResponse.json({ content: chargeList.slice(page, page + 8) });
  }),
  http.get('/api/whosfanContent', ({ request }) => {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page'));
    return HttpResponse.json({ content: whosfanList.slice(page, page + 8) });
  }),
  http.get('/api/awardsContent', ({ request }) => {
    const url = new URL(request.url);
    const page = parseInt(url.searchParams.get('page'));
    return HttpResponse.json({ content: awardsList.slice(page, page + 8) });
  }),
];
