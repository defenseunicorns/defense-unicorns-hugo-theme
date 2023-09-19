module userguide

go 1.20

require (
	github.com/defenseunicorns/defense-unicorns-hugo-theme v0.3.7 // x-release-please-version
	github.com/defenseunicorns/defense-unicorns-hugo-theme/dependencies v0.3.7 // x-release-please-version
)

require github.com/hugomods/icons/vendors/mdi v0.3.0 // indirect

replace github.com/defenseunicorns/defense-unicorns-hugo-theme => ../

replace github.com/defenseunicorns/defense-unicorns-hugo-theme/dependencies => ../dependencies
