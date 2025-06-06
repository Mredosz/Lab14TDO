## Deployment Result

- **Environment**: ${{ github.event.inputs.environment || 'N/A' }}
- **Version**: ${{ github.event.inputs.version || 'N/A' }}
- **Status**: ${{ job.status }}
- **Run URL**: [Run logs](${{ github.server_url }}/${{ github.repository }}/actions/runs/${{ github.run_id }})

---

_This issue was created automatically by GitHub Actions._
