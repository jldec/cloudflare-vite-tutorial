interface Env {
  ASSETS: Fetcher;
}

export default {
  fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api/")) {
      return Response.json({
        name: "Cloudflare Workers",
        time: Date.now(),
      });
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;