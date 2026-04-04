#!/bin/bash

# Fix relative paths for Login and Registrar (moving from depth 2 to depth 3)
# Depth 2: src/componentes/Login/Login.js
# Depth 3: src/features/auth/Login/Login.js
sed -i '' 's/\.\.\/\.\.\//\.\.\/\.\.\/\.\.\//g' src/componentes/Login/*.js 
sed -i '' 's/\.\.\/\.\.\//\.\.\/\.\.\/\.\.\//g' src/componentes/Registrar/*.js 

# Fix relative paths for NuevaContra (moving from depth 3 to depth 2)
# Depth 3: src/componentes/inicio/Inicio/NuevaContra.js
# Depth 2: src/features/auth/RestablecerPassword.js
# Need to change ../../../ to ../../
sed -i '' 's/\.\.\/\.\.\/\.\.\//\.\.\/\.\.\//g' src/componentes/inicio/Inicio/NuevaContra.js

# Create target directories
mkdir -p src/features/auth src/features/admin src/features/tenant src/features/public src/features/profile

# Move directories
mv src/componentes/Login src/features/auth/
mv src/componentes/Registrar src/features/auth/
mv src/componentes/inicio/Inicio/NuevaContra.js src/features/auth/RestablecerPassword.js

# For the rest, we just move contents into the prepared directories
mv src/componentes/Admin/* src/features/admin/
mv src/componentes/Inquilino/* src/features/tenant/
mv src/componentes/Perfil/* src/features/profile/
mv src/componentes/inicio/* src/features/public/

# Verify what's left in componentes and remove it if empty
rm -rf src/componentes/Admin src/componentes/Inquilino src/componentes/Perfil src/componentes/inicio
rmdir src/componentes || true
