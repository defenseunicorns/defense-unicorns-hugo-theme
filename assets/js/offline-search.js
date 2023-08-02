// Adapted from code by Matt Walters https://www.mattwalters.net/posts/2018-03-28-hugo-and-lunr/

;(function ($) {
  'use strict'

  $(document).ready(function () {
    const $searchInput = $('.td-search input')
    //
    // Register handler
    //

    $searchInput.on('keyup', (event) => {
      render($(event.target))
    })

    // Prevent reloading page by enter key on sidebar search.
    $searchInput.closest('form').on('submit', () => {
      return false
    })

    //
    // Lunr
    //

    let idx = null // Lunr index
    const resultDetails = new Map() // Will hold the data for the search results (titles and summaries)

    // Set up for an Ajax call to request the JSON data file that is created by Hugo's build process
    $.ajax($searchInput.data('offline-search-index-json-src')).then((data) => {
      idx = lunr(function () {
        this.ref('ref')

        // If you added more searchable fields to the search index, list them here.
        // Here you can specify searchable fields to the search index - e.g. individual taxonomies for you project
        // With "boost" you can add weighting for specific (default weighting without boost: 1)
        this.field('title', { boost: 5 })
        this.field('categories', { boost: 3 })
        this.field('tags', { boost: 3 })
        // this.field('projects', { boost: 3 }); // example for an individual toxonomy called projects
        this.field('description', { boost: 2 })
        this.field('body')

        data.forEach((doc) => {
          this.add(doc)

          resultDetails.set(doc.ref, {
            title: doc.title,
            excerpt: doc.excerpt,
          })
        })
      })

      $searchInput.trigger('change')
    })

    const closeResults = ($targetSearchInput) => {
      const killPopover = bootstrap.Popover.getInstance($targetSearchInput[0])
      killPopover.dispose()
    }

    const render = ($targetSearchInput) => {
      //
      // Remove existing popover
      //

      const dupPopover = bootstrap.Popover.getInstance($targetSearchInput[0])
      if (dupPopover !== null) {
        dupPopover.dispose()
      }

      //
      // Search
      //

      if (idx === null) {
        return
      }

      const searchQuery = $targetSearchInput.val()
      if (searchQuery === '') {
        return
      }

      const results = idx
        .query((q) => {
          const tokens = lunr.tokenizer(searchQuery.toLowerCase())
          tokens.forEach((token) => {
            const queryString = token.toString()
            q.term(queryString, {
              boost: 100,
            })
            q.term(queryString, {
              wildcard:
                lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING,
              boost: 10,
            })
            q.term(queryString, {
              editDistance: 2,
            })
          })
        })
        .slice(0, $targetSearchInput.data('offline-search-max-results'))

      //
      // Make result html
      //

      const $html = $('<div id="searchWrap">')

      $html.append(
        $('<div id="searchResults">')
          .css({
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '1em',
          })
          .append(
            $('<span id="searchTitle">')
              .text('Search Results')
              .css({ fontWeight: 'bold' })
          )
          .append(
            $('<span id="closeSearchResults">').addClass(
              'td-offline-search-results__close-button'
            )
          )
      )

      const $searchResultBody = $('<div>').css({
        maxHeight: `calc(100vh - ${
          $targetSearchInput.offset().top - $(window).scrollTop() + 180
        }px)`,
        overflowY: 'auto',
      })

      $html.append($searchResultBody)

      if (results.length === 0) {
        $searchResultBody.append(
          $('<p>').text(`No results found for query "${searchQuery}"`)
        )
      } else {
        results.forEach((r) => {
          const doc = resultDetails.get(r.ref)
          const href =
            $searchInput.data('offline-search-base-href') +
            r.ref.replace(/^\//, '')

          const $entry = $('<div>').addClass('mt-4')

          $entry.append($('<small>').addClass('d-block text-muted').text(r.ref))

          $entry.append(
            $('<a>')
              .addClass('d-block')
              .css({
                fontSize: '1.2rem',
              })
              .attr('href', href)
              .text(doc.title)
          )

          $entry.append($('<p>').text(doc.excerpt))

          $searchResultBody.append($entry)
        })
      }

      $targetSearchInput.one('shown.bs.popover', () => {
        $('#closeSearchResults').on('click', () => {
          closeResults($targetSearchInput)
        })
      })

      let popover = bootstrap.Popover.getInstance($targetSearchInput[0])
      console.log(`popover: ${popover}`)

      // if (popover !== null) {
      //   console.log(popover._config.content);
      //   popover._config.content = $html[0];
      //   popover.update();
      // } else {
      popover = new bootstrap.Popover($targetSearchInput, {
        content: $html[0],
        html: true,
        customClass: 'td-offline-search-results',
        placement: 'bottom',
      })
      popover.show()
      // }
    }
  })
})(jQuery)
