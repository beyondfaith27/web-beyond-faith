import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const alt = 'BeyondFaith | Mental Health Counseling & Support';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  let fontData;
  try {
    fontData = await readFile(
      join(process.cwd(), 'public/fonts/DMSerifDisplay-Regular.ttf')
    );
  } catch {
    // fall back to system serif
  }

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #5A2987 0%, #3d1a60 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.07)',
            top: '-200px',
            right: '-150px',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '350px',
            height: '350px',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.05)',
            bottom: '-100px',
            left: '-80px',
            display: 'flex',
          }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <p
            style={{
              fontFamily: fontData ? "'DM Serif Display'" : 'serif',
              fontSize: 84,
              fontWeight: 400,
              color: 'white',
              margin: 0,
              lineHeight: 1,
            }}
          >
            BeyondFaith
          </p>
          <p
            style={{
              fontSize: 30,
              color: 'rgba(255,255,255,0.72)',
              margin: 0,
              textAlign: 'center',
              fontWeight: 300,
              lineHeight: 1.4,
            }}
          >
            Your Journey to Inner Strength
          </p>
          <div
            style={{
              width: '60px',
              height: '2px',
              background: 'rgba(255,255,255,0.3)',
              display: 'flex',
            }}
          />
          <p
            style={{
              fontSize: 20,
              color: 'rgba(255,255,255,0.45)',
              margin: 0,
              textAlign: 'center',
              letterSpacing: '0.05em',
            }}
          >
            Mental Health Counseling & Support · beyondfaith.in
          </p>
        </div>
      </div>
    ),
    {
      ...size,
      ...(fontData
        ? {
            fonts: [
              {
                name: 'DM Serif Display',
                data: fontData,
                style: 'normal',
                weight: 400,
              },
            ],
          }
        : {}),
    }
  );
}
