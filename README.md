# OIDC-EVG-Demo

## Outh2 - OIDC, Java Spring, React.

### Demo Login Using OIDC Redirect To UserInfo

Backend config ( resources -> application.properties ): 

```bash
`spring.profiles.active=local`

`server.port=8080`

## -----------------------
# Database
# -----------------------
`spring.jpa.hibernate.ddl-auto=update`
`spring.datasource.url=''`
`spring.datasource.username=''`
`spring.datasource.password=''`

# -----------------------
# Naming entity mapping table in SQL
# -----------------------
`spring.jpa.hibernate.naming.physical-strategy=org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl`

# -----------------------
# Show sql
# -----------------------
`spring.jpa.properties.hibernate.format_sql=true`
`logging.level.org.hibernate.SQL=DEBUG`
`logging.level.org.hibernate.type.descriptor.sql.BasicBinder=TRACE`

# timezone
`spring.jpa.properties.hibernate.jdbc.time_zone=UTC`

`spring.security.oauth2.client.registration.oidc.client-id=''`
`spring.security.oauth2.client.registration.oidc.client-secret=''`
`spring.security.oauth2.client.registration.oidc.scope=profile,email,openid`
`spring.security.oauth2.client.provider.oidc.issuer-uri=''`

`frontend.baseurl=http://localhost:3000`
```

