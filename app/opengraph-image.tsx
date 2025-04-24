import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Bitcoin Pizza Day 2025 - Conectá con la Comunidad Bitcoiner';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex', // Aseguramos que tenga display: flex explícito
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: '#000000',
          position: 'relative',
          fontFamily: 'sans-serif',
          padding: '40px',
        }}
      >
        {/* Logo */}
        <div
          style={{
            display: 'flex', // Aseguramos que tenga display: flex explícito
            justifyContent: 'center',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              width: '60px',
              height: '60px',
              backgroundColor: '#FFFFFF',
              borderRadius: '50%',
              display: 'flex', // Aseguramos que tenga display: flex explícito
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '30px',
                backgroundColor: '#000000',
                borderRadius: '10px 10px 0 0',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  width: '20px',
                  height: '4px',
                  backgroundColor: '#FFFFFF',
                  bottom: '8px',
                  left: '10px',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  width: '20px',
                  height: '4px',
                  backgroundColor: '#FFFFFF',
                  bottom: '16px',
                  left: '10px',
                }}
              />
            </div>
          </div>
        </div>

        {/* Edición 2025 */}
        <div
          style={{
            display: 'flex', // Aseguramos que tenga display: flex explícito
            justifyContent: 'center',
            backgroundColor: 'rgba(194, 247, 108, 0.2)',
            borderRadius: '30px',
            padding: '10px 30px',
            marginBottom: '30px',
          }}
        >
          <p
            style={{
              color: '#C2F76C',
              fontSize: '24px',
              fontWeight: 'bold',
              margin: 0,
            }}
          >
            Edición 2025
          </p>
        </div>

        {/* Título principal */}
        <h1
          style={{
            color: '#C2F76C',
            fontSize: '72px',
            fontWeight: 'bold',
            margin: '0 0 10px 0',
            textAlign: 'center',
            lineHeight: '1.1',
          }}
        >
          Bitcoin Pizza Day
        </h1>

        {/* Subtítulo */}
        <h2
          style={{
            color: '#FFFFFF',
            fontSize: '56px',
            fontWeight: 'bold',
            margin: '0 0 30px 0',
            textAlign: 'center',
            lineHeight: '1.2',
          }}
        >
          Conectá con la Comunidad Bitcoiner
        </h2>

        {/* Descripción */}
        <p
          style={{
            color: '#FFFFFF',
            fontSize: '24px',
            margin: '0 0 40px 0',
            textAlign: 'center',
            maxWidth: '900px',
            lineHeight: '1.4',
          }}
        >
          Una noche de networking, conocimiento y celebración de la primera transacción comercial con Bitcoin.
        </p>

        {/* Información del evento */}
        <div
          style={{
            display: 'flex', // Aseguramos que tenga display: flex explícito
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              color: '#FFFFFF',
              fontSize: '24px',
              margin: '0 0 10px 0',
              opacity: 0.8,
            }}
          >
            23 de Mayo • 19:00 hs • La Crypta, Buenos Aires
          </p>
          <p
            style={{
              color: '#FFFFFF',
              fontSize: '20px',
              margin: 0,
              opacity: 0.7,
            }}
          >
            Entradas limitadas.
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
